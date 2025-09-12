import { Inject, Injectable, Injector } from "@angular/core";
import { EXPORT_STRATEGIES, ExportStrategy } from "./";

@Injectable({ providedIn: 'root' })
export class ExportFactory {
  constructor(
    @Inject(EXPORT_STRATEGIES) private strategies: Record<string, any>,
    private injector: Injector
  ) {}

  getStrategy(type: string): ExportStrategy {
    // use DI if my strategies depend on my other services
    const StrategyClass = this.strategies[type];
    if (!StrategyClass) throw new Error(`Unknown strategy: ${type}`);
    return this.injector.get(StrategyClass);
    

    // no use DI if only I have to handle logic
    // const StrategyClass = this.strategies[type];
    // if (!StrategyClass) {
    //   throw new Error(`Unknown strategy: ${type}`);
    // }
    // return new StrategyClass();
  }
}