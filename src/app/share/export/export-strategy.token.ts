import { InjectionToken } from '@angular/core';
import { CsvExportStrategy, ExcelExportStrategy, PdfExportStrategy } from './';

export const EXPORT_STRATEGIES = new InjectionToken<Record<string, any>>('EXPORT_STRATEGIES');

export const strategies = {
  csv: CsvExportStrategy,
  pdf: PdfExportStrategy,
  excel: ExcelExportStrategy
};