import { NodePlopAPI } from 'plop'

export const libGenerator = (plop: NodePlopAPI) => {
  const prompts = [
    {
      type: 'input',
      name: 'libName',
      message: 'Nome da Lib'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Descrição da Lib'
    }
  ]
  const actions = ({ libName, description }) => {
    return [
      {
        type: 'copy-files',
        data: {
          source: 'packages/shared/functions',
          dest: `packages/shared/${libName}`,
          replaceInFiles: {
            '@tia/functions': `@tia/${libName}`,
            'Templated shared functions': description
          }
        }
      }
    ]
  }

  return {
    description: 'Gerador de Módulo Compartilhado',
    prompts,
    actions
  }
}