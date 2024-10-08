<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
  <link
    rel="stylesheet"
    as="style"
    onload="this.rel='stylesheet'"
    href="https://fonts.googleapis.com/css2?display=swap&family=Epilogue%3Awght%40400%3B500%3B700%3B900&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
  />
  <title>Public Library - Member Login</title>
  <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\n        \n\n        body {\n            font-family: Arial, sans-serif;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            margin: 0;\n            background-color: #f0f2f5;\n        }\n        .login-container {\n            background-color: white;\n            padding: 40px;\n            margin: 50px auto;\n            border-radius: 8px;\n            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n            width: 400px;\n            height: 50vh;\n        }\n        h1 {\n            font-size: 32px;\n            margin-bottom: 30px;\n            text-align: center;\n        }\n        label {\n            display: block;\n            margin-bottom: 8px;\n            font-size: 18px;\n        }\n        input {\n            width: 100%;\n            padding: 12px;\n            margin-bottom: 20px;\n            border: 1px solid #ddd;\n            border-radius: 4px;\n            font-size: 16px;\n        }\n        button {\n            width: 100%;\n            padding: 12px;\n            background-color: #1877f2;\n            color: white;\n            border: none;\n            border-radius: 4px;\n            font-size: 18px;\n            cursor: pointer;\n        }\n        .forgot-password {\n            text-align: center;\n            margin-top: 20px;\n        }\n        .sign-up {\n            text-align: center;\n            margin-top: 20px;\n            font-size: 16px;\n        }\n        a {\n            color: #1877f2;\n            text-decoration: none;\n        }\n    "
    }}
  />
  <div
    className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
    style={{ fontFamily: 'Epilogue, "Noto Sans", sans-serif' }}
  >
    <div className="layout-container flex h-full grow flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
        <div className="flex items-center gap-4 text-[#111418]">
          <div className="size-4">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
            Public Library
          </h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <a
              className="text-[#111418] text-sm font-medium leading-normal"
              href="#"
            >
              Home
            </a>
            <a
              className="text-[#111418] text-sm font-medium leading-normal"
              href="#"
            >
              Search
            </a>
            <a
              className="text-[#111418] text-sm font-medium leading-normal"
              href="#"
            >
              My Books
            </a>
            <a
              className="text-[#111418] text-sm font-medium leading-normal"
              href="#"
            >
              Audiobooks
            </a>
            <a
              className="text-[#111418] text-sm font-medium leading-normal"
              href="#"
            >
              Recommendations
            </a>
          </div>
          <div className="flex gap-2">
            <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div
                  className="text-[#637588] flex border-none bg-[#f0f2f4] items-center justify-center pl-4 rounded-l-xl border-r-0"
                  data-icon="MagnifyingGlass"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                  </svg>
                </div>
                <input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-full placeholder:text-[#637588] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  defaultValue=""
                />
              </div>
            </label>
            <div className="flex gap-2">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Sign In</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">My Account</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Login Form */}
      <div className="login-container">
        <h2 className="text-2xl font-bold mb-6 text-center">Member Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required=""
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required=""
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1980e6] text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Log In
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</>
