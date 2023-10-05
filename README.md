# Trazabilidad en EVM

![imagen](https://i.ibb.co/gMrxRPL/Preview.png)

Este proyecto consta de dos partes principales, ubicadas en las carpetas "back" y "front".

- "Back" se sirve de la herramienta Hardhat para llevar a cabo el despliegue de contratos inteligentes.
- "Front" es un entorno impulsado por Vite React que se apoya en ethers.js.

Este proyecto está diseñado para operar en una red local, ya sea con Ganache o Hardhat. A continuación, se presenta una guía para ejecutar el proyecto en cada uno de estos entornos.

# GANACHE - Iniciar el proyecto

Abre la consola desde el directorio principal y ejecuta el siguiente comando:

```bash
cd back && npm run init-ganache && cd ../front && yarn install && yarn run dev
```

Esto generará un archivo llamado smart-contract.json en tanto "back" como en "front", que contendrá la información necesaria para interactuar con el contrato inteligente.

# Configuración de Metamask para ganache. 

Asegúrate de borrar los datos en la pestaña de actividad en Metamask. Esto previene conflictos relacionados con el nonce. Si ya tenías una red de Ganache configurada previamente en Metamask, es recomendable eliminarla y agregarla de nuevo con la siguiente información:
- URL: http://localhost:7545
- ID: 1337

Importa una o varias de las carteras para cubrir el coste del gas asociado a las transacciones.

# HARDHAT - Iniciar el proyecto

Abre la consola desde el directorio principal y ejecuta el siguiente comando:

```bash
cd back && npm run init-hardhat
```

Una vez que se haya iniziado el nodo de hardhat correctamente puedes copiar las carteras en el archivo addresses.md

Abre una nueva consola, ya que en la actual está ejecutándose el nodo de hardhat, y ejecutaremos el siguiente comando:

```bash
cd back && npm run start && cd ../front && yarn install && yarn run dev
```

Esto generará un archivo llamado smart-contract.json en tanto "back" como en "front", que contendrá la información necesaria para interactuar con el contrato inteligente.

## Configuración de Metamask para hardhat. 

Asegúrate de borrar los datos de la pestaña de actividad para evitar conflictos con el nonce. Si tuvieses una red de hardhat añadida anteriormente, bórrala y añádela de nuevo con los datos siguientes:
- URL: http://localhost:8545
- ID: 31337

Importa una o varias de las carteras para cubrir el coste del gas asociado a las transacciones.