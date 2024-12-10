export enum TrainingType {
  ENDURANCE = 'Resistencia',
  SPEED_TRAINING = 'Contrareloj',
}

export type Training = {
  trainingType: TrainingType
  distance: number
  timing: number
  date: string
  comment: string
}
