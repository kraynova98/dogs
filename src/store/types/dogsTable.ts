interface MeasuringType {
  imperial: string;
  metric: string;
}

interface Breed {
  bred_for: string;
  breed_group: string;
  height: MeasuringType;
  id: number;
  life_span: string;
  name: string;
  reference_image_id: string;
  temperament: string;
  weight: MeasuringType;
}

interface DogTableItem {
  breeds: Array<Breed>;
  height: number;
  id: string;
  url: string;
  width: number;
}

interface DogsTableState {
  data: Array<DogTableItem>;
  limit: number;
  page: number;
  total: number;
}

export type NullableDogsTableState = Nullable<DogsTableState>;
