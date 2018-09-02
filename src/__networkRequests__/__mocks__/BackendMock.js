'use strict'

export const allUsers = [
  {
    licencePlateNumber: '7681 BH',
    contact: { mobileNumber: '', extension: '897111', emailAddress: '' },
    name: { firstName: 'Chad', lastName: 'Tafari' },
    carDetails: { color: 'Red', make: 'Honda', model: 'Civic', year: '2016', }
  },
  {
    licencePlateNumber: '7611 HD',
    contact: { mobileNumber: '', extension: '78337', emailAddress: '' },
    name: { firstName: 'Damani', lastName: 'Huncher' },
    carDetails: { color: '', make: 'Suzuki', model: '', year: '', }
  },
  {
    licencePlateNumber: '8722 HT',
    contact: { mobileNumber: '876-687-2822', extension: '34442', emailAddress: 'email@email.com' },
    name: { firstName: 'Jodi-Ann', lastName: 'Blackgoat' },
    carDetails: { color: '', make: '', model: '', year: '', }
  },
  {
    licencePlateNumber: '3551 FA',
    contact: { mobileNumber: '876-446-7810', extension: '', emailAddress: 'email@email.com' },
    name: { firstName: 'Suzette', lastName: 'Whydaughter' },
    carDetails: { color: 'Grey', make: 'Honda', model: 'Fit', year: '', }
  },
  {
    licencePlateNumber: '6690 DF',
    contact: { mobileNumber: '', extension: '77785', emailAddress: '' },
    name: { firstName: 'Stacey-Joy', lastName: 'Teon' },
    carDetails: { color: 'Grey', make: 'Toyota', model: 'Prima', year: '', }
  },
  {
    licencePlateNumber: '8167 HB',
    contact: { mobileNumber: '', extension: '', emailAddress: 'email@email.com' },
    name: { firstName: 'Genet', lastName: 'Suym' },
    carDetails: { color: 'White', make: 'BMW', model: 'M4', year: '', }
  }
]

export const interactionList = {
  blockedBy: [
    '8722 HT', 
    '7611 HD',
    '3551 FA',
    '6690 DF',
  ],
  blocking: [
    '7681 BH',
    '8167 HB',
  ]
}