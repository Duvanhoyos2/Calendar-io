import test from 'node:test';
import assert from 'node:assert/strict';
import {dateKey,totals,validateEntry} from './model.js';
test('mantiene la fecha local seleccionada',()=>assert.equal(dateKey(new Date(2026,10,8,23,45)),'2026-11-08'));
test('calcula ingresos, gastos y saldo sin contar notas',()=>assert.deepEqual(totals([{type:'income',amount:150000},{type:'expense',amount:32000},{type:'note',amount:100}]),{income:150000,expense:32000,balance:118000}));
test('rechaza registros incompletos y valores financieros inválidos',()=>{assert.throws(()=>validateEntry({date:'2026-11-08',text:' ',type:'note'}));for(const amount of [0,-1,NaN,Infinity])assert.throws(()=>validateEntry({date:'2026-11-08',text:'Comida',type:'expense',amount}));assert.doesNotThrow(()=>validateEntry({date:'2026-11-08',text:'Comida',type:'expense',amount:15000}));});
