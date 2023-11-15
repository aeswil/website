<template>
  <div class="flex flex-col h-screen items-center">
    <div class="flex flex-col h-screen container">
      <main class="flex flex-col flex-auto items-center">
        <div class="flex flex-col lg:flex-row mt-24 bg-primary-900 rounded-3xl py-6 lg:px-6 space-y-6 space-x-6">
          <!-- avatar -->
          <div class="flex items-center justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/24606067?v=4"
              alt="pfp"
              class="rounded-full h-48 w-48"
            >
          </div>

          <div class="flex justify-center">
            <!-- about me -->
            <div class="flex flex-col space-y-4 lg:space-y-2 mt-3">
              <h1 class="text-3xl font-bold">
                {{ $t('hello') }}
              </h1>
              <div>
                <p>{{ $t('about_me') }}</p>
                <p>{{ $t('are_you_interested') }}</p>
              </div>
              <div class="flex space-x-6">
                <div>
                  <a
                    href="mailto:me@aesdev.me"
                    class="flex space-x-2 items-center"
                  >
                    <UIcon
                      class="w-5 h-5"
                      name="i-heroicons-envelope-solid"
                    />
                    <p>Email: me@aesdev.me</p>
                  </a>
                </div>
                <div>
                  <a
                    href="https://t.me/aeswilliam"
                    class="flex space-x-2 items-center"
                  >
                    <UIcon
                      class="w-5 h-5"
                      name="i-heroicons-paper-airplane-solid"
                    />
                    <p>Telegram: @aeswilliam</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
