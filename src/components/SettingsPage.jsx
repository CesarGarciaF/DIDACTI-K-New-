import React from "react";
import { RiCashFill } from "@remixicon/react";
import { Card, Divider, Icon, TextInput } from "@tremor/react";

export const SettingsPage = () => {
  return (
    <div className="flex flex-row min-h-screen bg-gray-100">
      <main className="main flex flex-col flex-grow md:ml-0 transition-all duration-150 ease-in mx-auto bg-dark-tremor-brand-faint">
        <div className="main-content flex flex-col flex-grow p-4">
          <h1 className="font-bold text-2xl text-gray-200">Ajustes</h1>
          <div className="flex flex-col flex-grow rounded mt-4">
            {/* Des */}
            <div>
              <Card className="w-full">
                <Icon
                  icon={RiCashFill}
                  color="blue"
                  variant="solid"
                  tooltip="Avatar del usuario"
                  size="lg"
                />
                <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                  Jorge Bernal
                </p>
                <Divider>Datos generales</Divider>
                <div>
                  <TextInput placeholder="Correo Electronico" type="email" />
                  <TextInput placeholder="Type password here" type="password" />
                </div>
              </Card>
            </div>
            {/* Des */}
          </div>
        </div>
      </main>
    </div>
  );
};
export default SettingsPage;
