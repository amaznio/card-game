export interface Position {
  x: number;
  y: number;
}

export interface MONEY_ACTION {
  add?: number;
  remove?: number;
}

export interface CARD_ACTION {
  heal?: number;
  damage?: number;
  money?: MONEY_ACTION;
}

export interface ICard {
  path: string;
  name: string;
  description: string;
  action: CARD_ACTION;
}

export const CARD_MAP: Map<string, ICard> = new Map();

CARD_MAP.set("Cross Swords - 1", {
  path: "card_icons/001-cross-swords",
  name: "Cross Swords",
  description: "Deal 5 damage",
  action: {
    damage: 5
  }
});

CARD_MAP.set("Scepter - 1", {
  path: "card_icons/002-scepter",
  name: "Scepter",
  description: "Deal 6 damage",
  action: {
    damage: 6
  }
});

CARD_MAP.set("Money Bag - Add 5", {
  path: "card_icons/003-money-bag",
  name: "Money Bag",
  description: "Recieve 5 gold",
  action: {
    money: { add: 5 }
  }
});

CARD_MAP.set("Money Bag - Remove 5", {
  path: "card_icons/003-money-bag",
  name: "Money Bag",
  description: "You are taxed 5 gold",
  action: {
    money: { remove: 5 }
  }
});

export interface AvatarStats {
  STR: number;
  STA: number;
  INT: number;
  AGI: number;
  LUK: number;
  WIS: number;
}

export interface Avatar {
  path: string;
  name: string;
  description: string;
}

export const AVATAR_MAP: Map<string, Avatar> = new Map();

AVATAR_MAP.set("Knight", {
  path: "avatars/001-knight",
  name: "Knight",
  description: "A noble warrior.",
});

AVATAR_MAP.set("Crossbowman", {
  path: "avatars/002-crossbow",
  name: "Crossbowman",
  description: "A sniper who accurately attacks from long distance.",
});

AVATAR_MAP.set("Adventurer", {
  path: "avatars/015-adventurer",
  name: "Adventurer",
  description: "A vagabond who enjoys exploring the world.",
});

AVATAR_MAP.set("Magician", {
  path: "avatars/019-magician",
  name: "Magician",
  description: "A master of the arcane arts who excels at combat magic.",
});