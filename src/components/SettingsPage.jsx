import React from "react";
import { RiCashFill } from "@remixicon/react";
import { Card, Divider, Icon, TextInput, Button } from "@tremor/react";

export const SettingsPage = () => {
  return (
    <div className="flex flex-row bg-gray-100">
      <main className="main flex flex-col flex-grow md:ml-0 transition-all duration-150 ease-in mx-auto">
        <div className="main-content flex flex-col flex-grow p-2">
          <div className="flex flex-col flex-grow rounded mt-1">
            {/* Des */}
            <div>
              <Card className="w-full">
                <Icon
                  icon={RiCashFill}
                  color="blue"
                  variant="solid"
                  tooltip="Avatar del usuario"
                  size="xl"
                  className="mb-2 w-20 h-20"
                />
                <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                  Jorge Bernal
                </p>
                <Divider className="text-xl font-medium">Datos generales</Divider>
                <div className="grid grid-cols-2 gap-4">
                  <TextInput placeholder="Nombre(s)" type="text" />
                  <TextInput placeholder="Apellidos" type="text" />
                  <TextInput className="col-span-2" placeholder="Ingrese la contraseña" type="password" />
                  <TextInput className="col-span-2" placeholder="Correo Electronico" type="email" />
                </div>
                <Button className="mt-4 w-full">
                  Ajustar Perfil
                </Button>
              </Card>
            </div>
            {/* Des */}
            {/* Botones extras */}
            {/* Botones extras */}
          </div>
        </div>
      </main>
    </div>
  );
};
export default SettingsPage;
