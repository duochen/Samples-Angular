export const PpsWiqEntityIdMap = {
  'e904e5d0-7119-320f-9c05-0eae3f45a90d': { 'dev': '5205214978113536', 'p4d':'5168145182490624' }, // WGC
  'c5da4173-34be-3921-bbb3-797346c119c1': { 'dev': '5205214978113536', 'p4d':'5156539576877056' }, // Upper Master valve
  'a7c9a623-69b0-3670-924b-fb045894b0a9': { 'dev': '5205214978113536', 'p4d':'6258582651666432' }, // VR Plug A
  'a90a436d-b175-371a-86e0-f18f0c603efb': { 'dev': '4910774770204672', 'p4d': '5141282443755520'}, // ESP - ESP-ACAK-122
  '31b55d03-e65f-3139-98bf-9548ce9c1051': { 'dev': '5145292131270656', 'p4d': '5204974728380416'}, // ESP - ESP-ACAK-124
  '9f171c32-ddbe-3330-a0c0-756428e8ccf5': { 'dev': '5076582787973120', 'p4d': '5110118597263360'}, // ESP - ESP-ACAK-181
  '30f6e7cf-8b1b-3a8a-a5e5-e54401abedcc': { 'dev': '5176419738976256', 'p4d': '5196947535167488'}, // ESP - ESP-ACAK-182
  '39a79891-a940-3849-87eb-6ea6ef80ea11': { 'dev': '5183295008538624', 'p4d': '5184319425347584'}, // ESP - ESP-ACAK-183
};
export function getWiqId(namespace: string, ppsEntityId: string) : string {
  return PpsWiqEntityIdMap[ppsEntityId][namespace];
}
