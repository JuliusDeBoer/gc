<div class="border-4 border-red-300 bg-zinc-50 rounded-lg p-8 flex flex-col
    justify-center items-center drop-shadow">
    <h3 class="font-medium text-xl text-center">
        {{ $name }}
        <br />
        &euro;{{ $price }}
    </h3>
    {{ $slot }}
</div>
