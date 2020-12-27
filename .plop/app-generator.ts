import { NodePlopAPI } from 'plop'

export const appGenerator = (plop: NodePlopAPI) => {
  const prompts = [
    {
      type: 'input',
      name: 'appName',
      message: 'Nome do App'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Descrição do App'
    },
    {
      type: 'input',
      name: 'port',
      message: 'Qual é a porta para o modo dev (ex: 3045, Verificar portas disponíveis)'
    },
    {
      type: 'input',
      name: 'appPath',
      message: 'Caminho do App (ex: /my-app)'
    }
  ]
  const actions = ({ appName, description, port, appPath }) => {
    return [
      {
        type: 'copy-files',
        data: {
          source: 'packages/app/template',
          dest: `packages/app/${appName}`,
          replaceInFiles: {
            '@tia/template': `@tia/${appName}`,
            '3010': port,
            'Frontend App Template': description,
            '/template': appPath,
            template: appName
          }
        }
      }
    ]
  }

  return {
    description: 'Gerador de Aplicativo',
    prompts,
    actions
  }
}