<template>
  <div :class="{PC: !market.utils.isMobile, mobile: market.utils.isMobile, ['ts_hover_sinner_' + props.sinnerId]: true}">

    <div class="identityProfileRarityWrap">
        <img
            :src="'/rarity/' + props.rarity + '.webp'"
            :alt="'Rarity ' + props.rarity"
            class="identityProfileRarity"
            />
    </div>

    <img :src="getImagePath('profile', props.id.toString())" :alt="props.name" class="IdentityProfile"/> <br/>

    <n-p>
      {{ props.name }}
    </n-p>

  </div>
</template>

<script setup lang="ts">

import { getImagePath } from '@/utils/getImagePath'
import { useMarket } from '@/stores/Market'

const market = useMarket()

const props = defineProps({
  id: {
    required: true,
    type: Number
  },
  name: {
    required: true,
    type: String
  },
  rarity: {
    required: true,
    type: Number
  },
  sinnerId: {
    required: true,
    type: Number
  }
})
</script>

<style scoped lang="less">

.PC, .mobile {
  text-align: center;
  white-space: pre-line;
  position: relative;

  img {
    margin-top: 15px;
  }
}
.PC {
  width: 220px;

  .IdentityProfile {
    width: 190px;
    height: 190px;
  }

  img {
    width: 190px;
  }
}

.mobile {
  width: 100%;

  .IdentityProfile {
    width: 90%;
    height: 90%;
  }

  img {
    width: 90%;
  }
}

.identityProfileRarityWrap {
  height: 50px;
  width: 90px;
  position: absolute;
  transform: rotate(30deg);
  right: 0;

  .identityProfileRarity {
    height: 50px;
    width: auto;
  }
}
</style>