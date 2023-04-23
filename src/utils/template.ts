import { PreExistingTemplate } from '../enums/preExistingTemplate'

export const getPreExistingTemplate = (tplType: PreExistingTemplate): any => {
  switch (tplType) {
    case PreExistingTemplate.FW_Contact:
      return {
        text: 'hola mundo',
        html: '<h1>Hola</h1> <p>Cuerpo del mail</p>'
      }
    case PreExistingTemplate.ADA_Welcome:
      return {
        text: 'Bienvenid@ a ADA - Entrenamiento Auditivo',
        html: '<h3>Bienvenid@ a ADA - Entrenamiento Auditivo</h3> <h5>Ya estas listo para comenzar</h5>'
      }
    default:
      throw new Error('utils/template/getPreExistingTemplate -> PreExistingTemplate not found')
  }
}
