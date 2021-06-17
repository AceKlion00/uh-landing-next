export enum ProductCategory {
  Patio = 'PATIO',
  RetainingWall = 'RETAINING_WALL',
  Walkway = 'WALKWAY',
  Border = 'BORDER',
  Cap = 'CAP',
  Coping = 'COPING',
  StepUnit = 'STEP_UNIT',
  StepTread = 'STEP_TREAD',
  BaseMaterial = 'BASE_MATERIAL',
  PaverAccessory = 'PAVER_ACCESSORY',
  RetainingWallAccessory = 'RETAINING_WALL_ACCESSORY',
  FirePit = 'FIRE_PIT',
  FirePlace = 'FIRE_PLACE',
  PillarKit = 'PILLAR_KIT',
  Kitchen = 'KITCHEN',
  BulkStone = 'BULK_STONE',
  BulkMulch = 'BULK_MULCH',
  BulkSoil = 'BULK_SOIL',
}

export interface KitColor {
  name: string;
  image: string;
  color: string;
}

export interface KitDesign {
  comment: string;
  order: number;
  components: string[];
  designId: string;
  thumbnailImages: string[];
  bigImages: string[];
  normalImages: string[];
  coverImage: string;
  kitColors: KitColor[];
  name: string;
  price: number;
  quantity: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface KitSeries {
  kitSeriesId: string;
  name: string;
  image: string;
  isBestSeller: boolean;
  comment: string;
  kitDesigns: KitDesign[];
}

export interface KitType {
  category: ProductCategory;
  kitTypeId: string;
  name: string;
  comment: string;
  kitSeries: KitSeries[];
}
