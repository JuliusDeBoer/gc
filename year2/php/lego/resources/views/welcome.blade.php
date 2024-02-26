<x-layout>

<x-slot:title>
    Legoland Doetinchem
</x-slot>

<div class="flex flex-col min-h-[100dvh] bg-white">
  <main class="flex-1">
    <section class="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
      <div class="container mx-auto flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
        <div class="space-y-2 text-center">
          <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-blue-900">
            Welkom bij Lego Land Doetinchem
          </h1>
          <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Een heel leuk en echt pretpark in Doetinchem
          </p>
        </div>
      </div>
    </section>
    <section class="w-full py-12 md:py-24 lg:py-32 bg-red-50">
        <h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight text-red-900 text-center">
            Tickets
        </h2>
        <div class="container mx-auto mt-12 flex justify-around items-center">
            <x-pricing-card name="Standard" price="30">
                <ul class="list-disc">
                    <li>All day access</li>
                    <li>Access to all attractions</li>
                </ul>
                <button class="btn ghost info">Buy standard ticket</button>
            </x-pricing-card>
            <x-pricing-card name="Premium" price="60">
                <ul class="list-disc">
                    <li>All day access</li>
                    <li>Access to all attractions</li>
                    <li>Access to the premium que</li>
                    <li>Free meal</li>
                </ul>
                <button class="btn ghost info">Buy premium ticket</button>
            </x-pricing-card>
            <x-pricing-card name="Familly" price="80">
                <ul class="list-disc">
                    <li>All day access</li>
                    <li>Access to all attractions</li>
                    <li>4 meals free</li>
                </ul>
                <button class="btn ghost info">Buy familly pack</button>
            </x-pricing-card>
        </div>
    </section>
  </main>
</div>
</x-layout>
