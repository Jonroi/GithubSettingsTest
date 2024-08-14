type HeroAttributes = {
  speed: number;
  resistance: number;
  attack: number;
  defence: number;
  HP: number;
};

const HeroAttributes: { [key: string]: HeroAttributes } = {
  hannuHodari: {
    speed: 20,
    resistance: 20,
    attack: 25,
    defence: 15,
    HP: 20,
  },
  purpleGirls: {
    speed: 30,
    resistance: 15,
    attack: 20,
    defence: 20,
    HP: 15,
  },
  einstein: {
    speed: 15,
    resistance: 20,
    attack: 15,
    defence: 30,
    HP: 20,
  },
  graffitiGaya: {
    speed: 20,
    resistance: 20,
    attack: 20,
    defence: 20,
    HP: 20,
  },
  pirate: {
    speed: 25,
    resistance: 20,
    attack: 25,
    defence: 15,
    HP: 15,
  },
};

export default HeroAttributes;
