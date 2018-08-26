'use strict'

export const allUsers = [
  {
    licencePlateNumber: '7681 BH',
    contact: { mobileNumber: '', extension: 897111, emailAddress: '' },
    name: { firstName: 'John', lastName: 'Doe' },
    carDetails: { color: 'Red', make: 'Honda', model: 'Civic', year: '2016', }
  },
  {
    licencePlateNumber: '7611 HD',
    contact: { mobileNumber: '', extension: 78337, emailAddress: '' },
    name: { firstName: 'Joe', lastName: 'Grindley' },
    carDetails: { color: '', make: 'Suzuki', model: '', year: '', }
  },
  {
    licencePlateNumber: '8722 HT',
    contact: { mobileNumber: '876-687-2822', extension: 34442, emailAddress: 'email@email.com' },
    name: { firstName: 'Suzy', lastName: 'Queue' },
    carDetails: { color: '', make: '', model: '', year: '', }
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