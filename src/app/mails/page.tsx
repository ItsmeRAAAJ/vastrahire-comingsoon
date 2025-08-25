"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Email {
  id: string;
  email: string;
  createdAt: string;
}

export default function MailsPage() {
  const [emails, setEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [copiedEmail, setCopiedEmail] = useState('');

  const fetchEmails = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get(`${process.env.NEXT_PUBLIC_WAITLIST_BACKEND_URL}/api/v1/waitlist/mails`);
      
      if (response.data.success) {
        setEmails(response.data.data);
      } else {
        setError(response.data.message || 'Failed to fetch emails');
      }
    } catch (err) {
      setError('Failed to fetch emails. Make sure the backend is running.');
      console.error('Error fetching emails:', err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(''), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading emails...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>{error}</p>
          </div>
          <button
            onClick={fetchEmails}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Waitlist Emails
          </h1>
          <p className="text-gray-600">
            {emails.length} email{emails.length !== 1 ? 's' : ''} collected
          </p>
        </div>

        {/* Email List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="border-b border-gray-200 px-6 py-4 bg-gray-50">
            <h2 className="text-lg font-medium text-gray-900">All Emails</h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            {emails.length === 0 ? (
              <div className="px-6 py-8 text-center">
                <p className="text-gray-500">No emails found in the waitlist.</p>
              </div>
            ) : (
              emails.map((email) => (
                <div
                  key={email.id}
                  className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer group"
                  onClick={() => copyToClipboard(email.email)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {email.email}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Joined: {new Date(email.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {copiedEmail === email.email && (
                        <span className="text-xs text-green-600 font-medium">
                          Copied!
                        </span>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(email.email);
                        }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Refresh Button */}
        <div className="mt-6 text-center">
          <button
            onClick={fetchEmails}
            className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}