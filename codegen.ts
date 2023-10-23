import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './*.graphql',
  generates: {
    'introspection.json': {
       plugins: ['introspection'],
       config: {
         minify: true
       },
     },
    './src/__generated__/resolvers-types.ts': {
      config: {
        useIndexSignature: true,
        contextType: '../types/DataSourceContext#DataSourceContext',
        
      },
          
      
      plugins: ['typescript','typescript-resolvers']
    },
  },
};

export default config;
