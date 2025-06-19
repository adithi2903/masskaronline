import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  fromCart?: boolean;
};

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, fromCart = false }) => {
  const [showForgot, setShowForgot] = useState(false);

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      aria-label="Login modal"
    >
      <Dialog.Panel className="relative w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close login modal"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
        >
          <X size={24} />
        </button>

        {/* Logo or image */}
        <div className="flex justify-center mb-8">
          <img
            src="/qfreshstyles/images/formbg.png"
            alt="Form background"
            className="max-h-20 object-contain"
          />
        </div>

        {/* Header Tabs */}
        <div className="flex justify-between mb-6 border-b border-gray-300 pb-3">
          <button
            onClick={() => setShowForgot(false)}
            className={`text-lg font-semibold pb-1 border-b-2 ${
              !showForgot ? 'border-green-600 text-green-700' : 'border-transparent text-gray-500 hover:text-green-600'
            } transition-colors`}
          >
            Sign In
          </button>

          <a
            href="/customer/signup.html"
            className="text-blue-600 hover:underline font-semibold"
            tabIndex={showForgot ? -1 : 0}
          >
            New User?
          </a>
        </div>

        {/* Forgot password message */}
        {showForgot && (
          <div className="mb-6 rounded bg-yellow-50 p-4 text-blue-700 text-sm">
            Please enter your registered email address. We’ll send a unique reset key to your mail.
            <button
              onClick={() => setShowForgot(false)}
              className="ml-3 rounded bg-green-600 px-3 py-1 text-white hover:bg-green-700 transition"
            >
              Go back
            </button>
          </div>
        )}

        {/* Form */}
        <form className="space-y-6" method="post" action="/">
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-gray-700 font-semibold"
            >
              {showForgot ? 'Registered Email:' : 'Username:'}
            </label>
            <input
              id="username"
              name="LoginForm[username]"
              type={showForgot ? 'email' : 'text'}
              required
              placeholder={showForgot ? 'you@example.com' : 'info@masskaronline.com'}
              autoComplete={showForgot ? 'email' : 'username'}
              className="w-full rounded border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {!showForgot && (
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-gray-700 font-semibold"
              >
                Password:
              </label>
              <input
                id="password"
                name="LoginForm[password]"
                type="password"
                required
                placeholder="********"
                autoComplete="current-password"
                className="w-full rounded border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          )}

          {!showForgot && fromCart && (
            <div className="flex items-center space-x-2">
              <input
                id="rememberme"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
              />
              <label htmlFor="rememberme" className="text-gray-700 font-medium text-sm">
                Remember me
              </label>
            </div>
          )}

          {!showForgot && (
            <div className="text-right">
              <button
                type="button"
                onClick={() => setShowForgot(true)}
                className="text-sm text-blue-600 hover:underline focus:outline-none"
              >
                Forgot password?
              </button>
            </div>
          )}

          <div className="flex justify-end space-x-4 mt-8">
            {showForgot ? (
              <>
                <button
                  type="submit"
                  className="flex-1 rounded bg-green-600 px-6 py-2 text-white hover:bg-green-700 transition"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowForgot(false)}
                  className="flex-1 rounded bg-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  type="submit"
                  className="rounded bg-green-600 px-8 py-2 text-white hover:bg-green-700 transition"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded bg-gray-300 px-8 py-2 text-gray-700 hover:bg-gray-400 transition"
                >
                  Close
                </button>
              </>
            )}
          </div>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
};
