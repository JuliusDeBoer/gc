<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ $title ?? "Legoland Doetinchem" }}</title>
        @vite('resources/css/app.css', 'resources/app.js')
    </head>
    <body>
      <header class="px-4 lg:px-6 h-14 flex items-center">
        <nav class="ml-auto flex gap-4 sm:gap-6">
          <a class="text-sm font-medium hover:underline underline-offset-4 text-blue-500" href="/ticket">
            Tickets
          </a>
          <a class="text-sm font-medium hover:underline underline-offset-4 text-blue-500" href="/attractions">
            Attractions
          </a>
          <a class="text-sm font-medium hover:underline underline-offset-4 text-blue-500" href="/contact">
            Contact
          </a>
        </nav>
      </header>

      {{ $slot }}

      <footer class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p class="text-xs text-gray-500">© 2024 Asdf Inc. All rights reserved.</p>
        <nav class="sm:ml-auto flex gap-4 sm:gap-6">
      <p class="text-xs hover:underline underline-offset-4 text-blue-500">
        Terms of Service
      </p>
      <p class="text-xs hover:underline underline-offset-4 text-blue-50">
        Privacy
      </p>
    </nav>
  </footer>
</body>
</html>
