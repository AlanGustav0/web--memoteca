import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaCarregarMaisComponent } from './bota-carregar-mais.component';

describe('BotaCarregarMaisComponent', () => {
  let component: BotaCarregarMaisComponent;
  let fixture: ComponentFixture<BotaCarregarMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaCarregarMaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaCarregarMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
