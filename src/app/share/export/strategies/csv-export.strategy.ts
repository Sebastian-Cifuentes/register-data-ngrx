import { Injectable } from "@angular/core";
import { ExportStrategy } from "../export-strategy.interface";

@Injectable({providedIn: 'root'})
export class CsvExportStrategy implements ExportStrategy {
  export(data: any[]): void {
    console.log('Exporting as CSV...', data);
  }
}