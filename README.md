# Trazabilidad en EVM

El proyecto contiene dos partes, siendo las carpetas de "back" y "front". 

- El back utiliza la herramienta de hardhat para el nodo local de Ethereum y el deploy de contratos
- El front es un entorno de vite react y que utiliza ethers.js

## Iniciar el proyecto

Una vez hayas clonado el proyecto, abre la consola desde el editor de código y ejecuta el siguiente comando:

```bash
cd back && npm run init
```

Una vez que se haya iniziado el nodo de hardhat correctamente copiaremos las carteras en el archivo addresses.md 

Una vez copiadas las addresses y privateKeys abriremos otra consola y ejecutaremos el siguiente comando:

```bash
cd back && npm run start && cd ../front && yarn install && yarn run dev
```

Ahora configura la red en metamask de hardhat. Es importante borrar los datos de la pestaña de actividad para evitar conflictos con el nonce. Si tuvieses una red de hardhat añadida anteriormente, bórrala y añádela de nuevo con los datos siguientes:
- URL: http://localhost:8545
- ID: 31337

Importa una o varias de las carteras que tengas en el archivo de addresses.md para pagar el gas de las transacciones de registro de organizaciones y de agregar eventos a las etiquetas.