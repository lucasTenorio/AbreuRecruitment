import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkPortfolioComponent } from './artwork-portfolio.component';

describe('ArtworkPortfolioComponent', () => {
  let component: ArtworkPortfolioComponent;
  let fixture: ComponentFixture<ArtworkPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtworkPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtworkPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
