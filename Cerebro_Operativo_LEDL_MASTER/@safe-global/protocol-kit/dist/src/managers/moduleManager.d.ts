import { SafeContractImplementationType, SafeModulesPaginated } from '../types';
import SafeProvider from '../SafeProvider';
declare class ModuleManager {
    #private;
    constructor(safeProvider: SafeProvider, safeContract?: SafeContractImplementationType);
    private validateModuleAddress;
    private validateModuleIsNotEnabled;
    private validateModuleIsEnabled;
    getModules(): Promise<string[]>;
    getModulesPaginated(start: string, pageSize: number): Promise<SafeModulesPaginated>;
    isModuleEnabled(moduleAddress: string): Promise<boolean>;
    encodeEnableModuleData(moduleAddress: string): Promise<string>;
    encodeDisableModuleData(moduleAddress: string): Promise<string>;
    private validateModuleGuardAddress;
    private validateModuleGuardIsNotEnabled;
    private validateModuleGuardIsEnabled;
    private isModuleGuardCompatible;
    getModuleGuard(): Promise<string>;
    encodeEnableModuleGuardData(moduleGuardAddress: string): Promise<string>;
    encodeDisableModuleGuardData(): Promise<string>;
}
export default ModuleManager;
//# sourceMappingURL=moduleManager.d.ts.map