import { Injectable } from "@angular/core";
import { ExportStrategy } from "../export-strategy.interface";

@Injectable({providedIn: 'root'})
export class PdfExportStrategy implements ExportStrategy {
  export(data: any[]): void {
    console.log('Exporting as PDF...', data);
  }
}