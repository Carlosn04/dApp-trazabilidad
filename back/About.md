## Información adicional de los scripts

La principal diferencia entre los scripts que se ejecutan con Hardhat y los que se ejecutan con Ganache es el tiempo de espera para que se inicie el nodo local antes de realizar el despliegue de contratos.

### Scripts con Ganache:
- init-ganache: Este script instala las dependencias necesarias y ejecuta todos los procesos desde la configuración de la network hasta deploy.

- set-ganache: Configura la red para utilizar Ganache, mediante el uso de una [task personalizada de hardhat](https://hardhat.org/hardhat-runner/docs/advanced/create-task#advanced-usage) que configura la url del provider para acceder posteriormente que se encuentra en archivo del front json-rpc-url.json

- start-ganache: Este script configura Ganache, compila los contratos, formatea los datos creando el fichero smart-contracts.json, despliega los contratos en la red local de Ganache añadiendo el contract address al smart-contracts.json y copia el archivo al front. Requiere que la red local de Ganache esté activa antes de ejecutarse.

### Scripts con Hardhat:

- init-hardhat: Este script instala las dependencias y luego inicia un nodo local de Ethereum. Es necesario esperar a que el nodo esté en funcionamiento antes de ejecutar otros scripts.

- set-hardhat: Configura la red para utilizar Hardhat, mediante el uso de una [task personalizada de hardhat](https://hardhat.org/hardhat-runner/docs/advanced/create-task#advanced-usage) que configura la url del provider para acceder posteriormente que se encuentra en archivo del front json-rpc-url.json

- start-hardhat: Este script configura Hardhat, compila los contratos, formatea los datos creando el fichero smart-contracts.json, despliega los contratos en la red local de Hardhat añadiendo el contract address al smart-contracts.json y copia el archivo al front. Requiere que el nodo local de Hardhat esté activo antes de ejecutarse.

### Otros Scripts Comunes:
- compile: Compila los contratos en ambas configuraciones (Hardhat y Ganache).

- format: Formatea los datos de los contratos en ambas configuraciones.

- node: Inicia un nodo local de Ethereum en ambas configuraciones. Este script puede ser útil para interactuar con la red local después de su inicio.

- deploy-hardhat y deploy-ganache: Despliegan los contratos en la red local, ya sea utilizando Hardhat o Ganache, respectivamente.

- copy: Copia un archivo JSON que contiene información sobre los contratos a la carpeta "front" en ambas configuraciones.