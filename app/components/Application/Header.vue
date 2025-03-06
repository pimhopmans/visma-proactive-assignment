<template>
  <header class="bg-slate-800 border-b border-b-slate-700 py-8">
    <UContainer class="flex items-center">
      <nav>
        <ul class="flex gap-2">
          <li>
            <ApplicationLink to="/" label="Home" />
          </li>
          <li>
            <ApplicationLink to="/rickandmorty" label="Rick and Morty" />
          </li>
          <li>
            <ApplicationLink to="/pokemon" label="Pokémon" />
          </li>
        </ul>
      </nav>
    </UContainer>
  </header>
</template>
