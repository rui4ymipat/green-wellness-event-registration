/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EventActivity } from './types';

export const PROJECT_NAME = "โครงการยกระดับภาพลักษณ์สินค้า Green Wellness ของกรมพัฒนาธุรกิจการค้า";
export const PROJECT_DESCRIPTION = "ส่งเสริมสุขภาพและความยั่งยืนผ่านกิจกรรมที่หลากหลาย เพื่อยกระดับภาพลักษณ์สินค้า Green Wellness ในประเทศไทย";

export const ACTIVITIES: EventActivity[] = [
  {
    id: "green-wellness-academy",
    title: "อบรมเสวนาด้านการตลาด Green Wellness Academy",
    description: "ร่วมเจาะลึกกลยุทธ์การตลาดสำหรับธุรกิจสินค้าเพื่อสุขภาพและความยั่งยืน พบกับผู้เชี่ยวชาญที่จะมาแบ่งปันประสบการณ์และเทคนิคการขับเคลื่อนแบรนด์ในยุค Green Economy",
    date: "6 มิถุนายน",
    location: "กรมพัฒนาธุรกิจการค้า สนามบินน้ำ จ.นนทบุรี",
    mapQuery: "Department of Business Development, Sanambin Nam",
    menuTitle: "อบรมการตลาด",
    coordinates: [13.8837, 100.4901],
    capacity: 100,
    remainingSeats: 42,
    icon: "GraduationCap",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
    color: "#2e7d32"
  },
  {
    id: "run-for-green-life",
    title: "กิจกรรมวิ่ง Run For Green Life",
    description: "กิจกรรมวิ่งเพื่อสุขภาพที่มุ่งเน้นความเป็นมิตรต่อสิ่งแวดล้อม วิ่งเปิดใจเพื่อชีวิตที่เป็นมิตรกับธรรมชาติ (ไม่มีค่าใช้จ่ายในการลงทะเบียน)",
    date: "13 มิถุนายน",
    location: "สวนสมเด็จพระศรีนครินทร์ จ.นนทบุรี (สวนร.9)",
    mapQuery: "Srinagarindra Park, Nonthaburi",
    menuTitle: "กิจกรรมวิ่ง",
    coordinates: [13.9315, 100.5367],
    capacity: 500,
    remainingSeats: 128,
    icon: "Footprints",
    image: "https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?auto=format&fit=crop&q=80&w=1200",
    color: "#66bb6a"
  },
  {
    id: "wellness-experience-lab",
    title: "Workshop อาหารสุขภาพ Wellness Experience Lab",
    description: "เวิร์กช็อปปรุงอาหารสุขภาพสไตล์ Green Wellness เรียนรู้การเลือกใช้วัตถุดิท้องถิ่นและกระบวนการปรุงที่คงคุณค่าทางโภชนาการสูงสุด",
    date: "20 มิถุนายน",
    location: "ชั้น 3 อาคารกรมพัฒนาธุรกิจการค้า สนามบินน้ำ",
    mapQuery: "Department of Business Development, Sanambin Nam",
    menuTitle: "อาหารสุขภาพ",
    coordinates: [13.8837, 100.4901],
    capacity: 100,
    remainingSeats: 15,
    icon: "UtensilsCrossed",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200",
    color: "#43a047"
  },
  {
    id: "green-fit-community-day",
    title: "กิจกรรมออกกำลังกายเพื่อสุขภาพ (พิลาทิส / โยคะ)",
    description: "เปิดรับพลังงานดีๆ ในวัน Green Fit Community Day สัมผัสศาสตร์การบริหารร่างกายด้วยพิลาทิสและโยคะในบรรยากาศผ่อนคลาย",
    date: "21 มิถุนายน",
    location: "โถงกิจกรรม ชั้น 1 กรมพัฒนาธุรกิจการค้า สนามบินน้ำ",
    mapQuery: "Department of Business Development, Sanambin Nam",
    menuTitle: "กิจกรรมออกกำลังกายเพื่อสุขภาพ (พิลาทิส / โยคะ)",
    coordinates: [13.8837, 100.4901],
    capacity: 100,
    remainingSeats: 24,
    icon: "Target",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
    color: "#81c784"
  }
];

export const NAV_LINKS = [
  { name: "หน้าแรก", path: "/" },
  ...ACTIVITIES.map(activity => ({
    name: activity.menuTitle,
    path: `/activity/${activity.id}`
  }))
];
