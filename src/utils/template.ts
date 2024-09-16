import { PreExistingTemplate } from '../enums/preExistingTemplate'
import fs from 'fs'
import path from 'path'
import handlebars from 'handlebars'

const loadHTML = async (htmlFile: string, replacements: any | null): Promise<string> => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'template', htmlFile))

  if (replacements === null) {
    return html.toString()
  } else {
    const template = handlebars.compile(html.toString())
    return template(replacements)
  }
}

export const getPreExistingTemplate = async (tplType: PreExistingTemplate, text: string): Promise<any> => {
  switch (tplType) {
    case PreExistingTemplate.FW_Contact:
      return {
        text: text,
        html: `<h1>Mensaje enviado:</h1> <p>${text}</p>`
      }
    case PreExistingTemplate.ADA_Welcome:
      return {
        text: 'Bienvenid@ a ADA - Entrenamiento Auditivo',
        html: await loadHTML('ADA_Welcome.html', null)
      }
    default:
      throw new Error('utils/template/getPreExistingTemplate -> PreExistingTemplate not found')
  }
}
