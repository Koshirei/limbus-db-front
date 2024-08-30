<template>
  <div class="view">
    <n-card class="content" :class="{isMobile: market.utils.isMobile}">
      <n-h1 id="identitiesViewTitle">{{ $t('identities')}} </n-h1>

      <div v-if="identitiesBySinner.length > 0">
        <div v-for="sinner of identitiesBySinner" :key="sinner.name"
             class="sinnerBox"
             :class="'border_sinner_' + sinner.id">
          <div class="sinner" :class="{'sinner-flex': !market.utils.isMobile}">
            <div class="sinner-img"
                 :class="{isMobile: market.utils.isMobile, ['linear_sinner_' + sinner.id]: true}">
              <SinnerLogoImg :id="sinner.id" :name="sinner.name" />
            </div>
            <div class="identity-flex">
              <router-link  v-for="identity of sinner.identities" :key="identity.id"
                            :to="{name: 'identity', params: { id: identity.id }}"
                            class="identity-img"
                            :class="{isMobile: market.utils.isMobile}">
                  <IdentityProfile :id="identity.id" :name="identity.name"
                                   :sinner-id="sinner.id" :rarity="identity.rarity"/>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { useMarket } from '@/stores/Market'
import { onMounted, ref, type Ref } from 'vue'
import type { IdentitiesBySinnerInterface } from '@/utils/Interfaces/DTO/IdentitiesBySinner'
import { IdentitiesService } from '@/services/IdentitiesService'
import SinnerLogoImg from '@/components/components/Sinner/SinnerLogoImg.vue'
import IdentityProfile from '@/components/components/Identities/IdentityProfile.vue'
const market = useMarket()

const identitiesBySinner: Ref<IdentitiesBySinnerInterface[]> = ref([])

onMounted(async () => {
  const response = await IdentitiesService.getAllIdentities()

  identitiesBySinner.value = response.data
})
</script>

<style lang="less" scoped>

.view {
  background-color: #0A0C0C;
  min-height: 100vh;
  z-index: 1;
  position: relative;

  &::before {
    content: "";
    display:block;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(/bg/bg_1.webp);
    background-size: auto;
    background-repeat: no-repeat;
    z-index: -1;
    height: 100%;
    width: 100%;
  }

  .content {

    .n-h1 {
      text-align: center;
      font-size: xxx-large;
      padding-bottom: 50px;
    }

    .sinner {
      margin-bottom: 75px;
    }
    .sinner-flex {
      display:flex;
    }

    .sinner-img {
      display: flex;
      justify-content: center;
      flex-direction: column;

      &.isMobile {
        flex-direction: row;
        padding: 15px 0;
      }
    }

    .identity-flex {
      display:flex;
      flex-wrap: wrap;
      gap: 25px;
      justify-content: space-evenly;
      padding: 25px 0;

      .identity-img {
        width: fit-content;

        &.isMobile {
          width: calc(50% - 25px);
        }
      }
    }
  }
}


</style>