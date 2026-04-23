/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface EventActivity {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  mapQuery: string;
  menuTitle: string;
  coordinates: [number, number];
  capacity: number;
  remainingSeats: number;
  icon: string;
  image: string;
  color: string;
}

export interface RegistrationData {
  id: string;
  eventId: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  notes?: string;
  timestamp: string;
}
