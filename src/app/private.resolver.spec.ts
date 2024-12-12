import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { privateResolver } from './private.resolver';

describe('privateResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => privateResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
