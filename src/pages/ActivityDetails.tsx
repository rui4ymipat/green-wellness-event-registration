/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Users, MapPin, ChevronLeft, Info, GraduationCap, Footprints, UtensilsCrossed, Target, CheckCircle2 } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { ACTIVITIES } from '../constants';
import { RegistrationForm } from '../components/RegistrationForm';
import { useEffect } from 'react';

// Fix for default marker icon in Leaflet
const customIcon = new L.Icon({
  iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const iconMap: Record<string, any> = {
  GraduationCap,
  Footprints,
  UtensilsCrossed,
  Target
};

export function ActivityDetails() {
  const { id } = useParams();
  const activity = ACTIVITIES.find(a => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!activity) {
    return <Navigate to="/" replace />;
  }

  const Icon = iconMap[activity.icon];

  return (
    <div className="pb-20">
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-wellness-dark">
        <div className="absolute inset-0 bg-wellness-dark">
          <img 
            src={activity.image} 
            alt={activity.title}
            className="w-full h-full object-cover brightness-[0.8]"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-wellness-dark/40" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white space-y-4">
          <Link to="/" className="inline-flex items-center gap-2 text-wellness-light hover:text-white transition-colors mb-4 group text-sm font-bold">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            กลับหน้าหลัก
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-4xl font-bold"
          >
            {activity.title}
          </motion.h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[20px] p-8 md:p-10 border border-wellness-border shadow-lg shadow-wellness-dark/5"
            >
              <div className="flex items-center gap-3 mb-8 text-wellness-dark border-b border-wellness-border pb-6">
                <Icon className="w-6 h-6" />
                <h2 className="text-xl font-bold">รายละเอียดกิจกรรม</h2>
              </div>
              <div className="text-wellness-ink/80 leading-relaxed text-base space-y-6">
                <p>{activity.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-wellness-bg p-4 rounded-xl border border-wellness-border flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-wellness-dark" />
                    <div>
                      <div className="text-[10px] uppercase opacity-60 font-bold">วันที่</div>
                      <div className="text-sm font-bold">{activity.date} 2567</div>
                    </div>
                  </div>
                  <div className="bg-wellness-bg p-4 rounded-xl border border-wellness-border flex items-center gap-3">
                    <Users className="w-5 h-5 text-wellness-dark" />
                    <div>
                      <div className="text-[10px] uppercase opacity-60 font-bold">จำนวนที่รับ</div>
                      <div className="text-sm font-bold">{activity.capacity} ท่าน</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-wellness-dark mb-4 group flex items-center gap-2">
                    <div className="w-1 h-5 bg-wellness-dark rounded-full" />
                    สิ่งที่จะได้รับจากกิจกรรม
                  </h3>
                  <ul className="list-none space-y-3 p-0">
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-4 h-4 text-wellness-mid mt-1 flex-shrink-0" />
                      <span className="text-sm font-medium">ความรู้และประสบการณ์จากผู้เชี่ยวชาญในสายงานโดยตรง</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-4 h-4 text-wellness-mid mt-1 flex-shrink-0" />
                      <span className="text-sm font-medium">สร้างเครือข่ายความร่วมมือกับกลุ่มผู้มีใจรักสุขภาพ</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-4 h-4 text-wellness-mid mt-1 flex-shrink-0" />
                      <span className="text-sm font-medium">อาหารว่างและเครื่องดื่มเพื่อสุขภาพตลอดกิจกรรม</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

              <div className="bg-wellness-bg rounded-[20px] p-6 border border-wellness-border flex gap-4">
                <div className="bg-white p-2.5 rounded-xl text-wellness-dark self-start border border-wellness-border">
                  <Info className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-wellness-dark">หมายเหตุสำคัญ</h4>
                  <p className="text-xs text-wellness-ink/60 leading-relaxed">
                    กรุณามาลงทะเบียนหน้างานก่อนเริ่มกิจกรรมอย่างน้อย 30 นาที 
                    หากติดภารกิจไม่สามารถเข้าร่วมได้ รบกวนแจ้งยกเลิกล่วงหน้าเพื่อเปิดโอกาสให้ผู้สมัครท่านอื่น
                  </p>
                </div>
              </div>

              {/* Interactive Map Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-[20px] overflow-hidden border border-wellness-border shadow-lg shadow-wellness-dark/5"
              >
                <div className="p-8 border-b border-wellness-border flex items-center justify-between">
                  <div className="flex items-center gap-3 text-wellness-dark">
                    <MapPin className="w-6 h-6" />
                    <h2 className="text-xl font-bold">สถานที่จัดกิจกรรม</h2>
                  </div>
                  <span className="text-sm font-medium text-wellness-ink/60">{activity.location}</span>
                </div>
                <div className="aspect-video w-full bg-wellness-bg relative z-10 interactive-map-container">
                  <MapContainer 
                    center={activity.coordinates} 
                    zoom={15} 
                    scrollWheelZoom={true}
                    className="h-full w-full grayscale contrast-125"
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={activity.coordinates} icon={customIcon}>
                      <Popup>
                        <div className="text-sm font-bold text-wellness-dark">
                          {activity.location}
                        </div>
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
                {/* External Links */}
                <div className="p-4 bg-wellness-bg/30 text-center flex items-center justify-center gap-8">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-wellness-dark hover:underline flex items-center gap-2"
                  >
                    <MapPin className="w-3 h-3" />
                    เปิดใน Google Maps
                  </a>
                  <div className="text-[10px] text-wellness-ink/40">หมุนลูกกลิ้งเม้าส์หรือใช้สองนิ้วเพื่อซูมขยายแผนที่</div>
                </div>
              </motion.div>
            </div>

          {/* Sticky Registration Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <RegistrationForm event={activity} />
              
              <div className="bg-white rounded-[20px] p-6 border border-wellness-border flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-wellness-ink/40 uppercase tracking-widest font-bold">ที่ว่างคงเหลือ</p>
                  <p className="text-xl font-bold text-wellness-dark">{activity.remainingSeats} ที่นั่ง</p>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-wellness-light flex items-center justify-center text-wellness-dark font-bold text-sm">
                  {Math.round((activity.remainingSeats / activity.capacity) * 100)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
