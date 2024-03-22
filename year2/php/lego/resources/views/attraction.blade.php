<x-layout>

<x-slot:title>
    {{$attraction->title}} | Legoland Doetinchem
</x-slot>

<img src="{{ url("attractions/images/" . $attraction->image) }}" class="h-80 w-full object-cover object-center" />

<h1 class="text-4xl font-bold m-12">{{ $attraction->title }}</h1>

<p class="p-8 md:p-48">{{ $attraction->content }}<p1>


</x-layout>
