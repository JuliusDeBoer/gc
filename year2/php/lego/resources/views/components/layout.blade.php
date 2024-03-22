<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ $title ?? "Legoland Doetinchem" }}</title>
        @vite('resources/css/app.css', 'resources/app.js')
    </head>
    <body class="min-h-screen w-full">
      <header class="px-4 lg:px-6 h-14 flex items-center justify-between bg-red-400">
        <a href="/"><img src="{{ Vite::asset('resources/images/lego.svg') }}" class="h-12" /></a>
        <nav class="flex gap-8">
          <a class="text-sm font-medium hover:underline underline-offset-4 text-blue-500 bg-white p-2 rounded" href="/tickets">
            Tickets
          </a>
          <a class="text-sm font-medium hover:underline underline-offset-4 text-blue-500 bg-white p-2 rounded" href="/attractions">
            Attracties
          </a>
          <a class="text-sm font-medium hover:underline underline-offset-4 text-blue-500 bg-white p-2 rounded" href="/opening-hours">
            Openingstijden
          </a>
          <a class="text-sm font-medium hover:underline underline-offset-4 text-blue-500 bg-white p-2 rounded" href="/contact-us">
            Contact
          </a>
        </nav>
      </header>

      <main class="min-h-screen container mx-auto flex flex-col justify-center items-center">
        {{ $slot }}
      </main>

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
