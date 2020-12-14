<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-grey-3 text-dark">
        <q-img :src="require('img/main-logo.png')" style="width: 5rem" basic />

        <q-toolbar-title>Pokedex</q-toolbar-title>
        <q-btn flat round dense icon="whatshot" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page padding>
        <div class="q-col-gutter-md row justify-center">
          <div class="col-md-2 col-sm-4 col-xs-6">
            <q-card>
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" :ratio="1" basic spinner-color="white" />
            </q-card>
          </div>
          <div class="col-md-2 col-sm-4 col-xs-6">
            <q-card flat>
              <q-skeleton height="150px" square />
              <q-card-section>
                <q-skeleton type="text" class="text-subtitle1" />
                <q-skeleton type="text" width="50%" class="text-subtitle1" />
                <q-skeleton type="text" class="text-caption" />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>

      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDefault',
};
</script>

<style></style>
