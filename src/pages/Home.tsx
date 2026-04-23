/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, GraduationCap, Footprints, UtensilsCrossed, Target, Users, CheckCircle2 } from 'lucide-react';
import { ACTIVITIES, PROJECT_NAME, PROJECT_DESCRIPTION } from '../constants';
import { cn } from '../lib/utils';

const iconMap: Record<string, any> = {
  GraduationCap,
  Footprints,
  UtensilsCrossed,
  Target
};

export function Home() {
  return (
    <div className="space-y-12 md:space-y-20">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden bg-white border-b border-wellness-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-wellness-dark">
              {PROJECT_NAME}
            </h1>
            <p className="text-base md:text-lg text-wellness-ink opacity-80 leading-relaxed max-w-lg">
              {PROJECT_DESCRIPTION}
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a href="#activities" className="bg-wellness-dark text-white px-8 py-4 rounded-[12px] font-bold shadow-lg shadow-wellness-dark/20 hover:bg-wellness-dark/95 transition-all flex items-center gap-2 group">
                เลือกหัวข้อกิจกรรม
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
          <div className="hidden md:block relative h-full bg-wellness-light/50 rounded-[32px]">
            <img 
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200" 
              alt="Hero Wellness"
              className="w-full h-[400px] object-cover rounded-[32px] shadow-2xl brightness-110"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200';
              }}
            />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[20px] p-8 md:p-12 border border-wellness-border relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-wellness-dark">วัตถุประสงค์ของโครงการ</h2>
            <div className="space-y-4 text-wellness-ink/80 leading-relaxed">
              <p>
                กรมพัฒนาธุรกิจการค้าเห็นถึงความสำคัญของกระแสสุขภาพและความยั่งยืนที่กำลังขับเคลื่อนเศรษฐกิจโลก 
                เราจึงจัดทำโครงการนี้ขึ้นเพื่อส่งเสริมและพัฒนาผู้ประกอบการ รวมถึงประชาชนทั่วไปที่มีใจรักสุขภาพ
              </p>
              <p>
                ผ่าน 4 กิจกรรมหลักที่จะช่วยเติมเต็มองค์ความรู้ ประสบการณ์ และสร้างสังคมรักษ์สุขภาพ (Green Community) 
                ให้เติบโตอย่างมั่นคงและยั่งยืน
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">กิจกรรมที่เปิดรับลงทะเบียน</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">เลือกกิจกรรมที่คุณสนใจและลงทะเบียนได้ฟรีทันที</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACTIVITIES.map((activity, index) => {
            const Icon = iconMap[activity.icon];
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-[20px] overflow-hidden border border-wellness-border hover:shadow-xl hover:shadow-wellness-dark/5 transition-all p-6 relative"
              >
                <div className="absolute top-6 right-6 bg-wellness-dark text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider z-10">
                  {activity.date}
                </div>
                
                <div className="flex flex-col h-full space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-wellness-light text-wellness-dark rounded-xl flex items-center justify-center relative flex-shrink-0 group-hover:bg-wellness-dark group-hover:text-white transition-colors duration-300 shadow-sm border border-wellness-border">
                      <Icon className="w-6 h-6 z-10" />
                      {/* Activity Background Thumbnail for extra polish */}
                      <div className="absolute inset-0 opacity-10 rounded-xl overflow-hidden transition-opacity group-hover:opacity-20">
                        <img 
                          src={activity.image} 
                          alt="" 
                          className="w-full h-full object-cover" 
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400';
                          }}
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0 pr-24">
                      <h3 className="text-lg font-bold text-wellness-ink group-hover:text-wellness-dark transition-colors leading-tight">
                        {activity.title}
                      </h3>
                      <div className="flex gap-4 mt-2 text-xs font-semibold text-wellness-ink opacity-70">
                        <span className="flex items-center gap-1.5"><Users className="w-3 h-3" /> {activity.capacity} ท่าน</span>
                        <span className="flex items-center gap-1.5 font-bold text-wellness-dark"><div className="w-1.5 h-1.5 rounded-full bg-wellness-mid animate-pulse" /> ว่าง {activity.remainingSeats} ที่นั่ง</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mt-auto">
                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-wellness-mid transition-all duration-1000" 
                        style={{ width: `${Math.round(((activity.capacity - activity.remainingSeats) / activity.capacity) * 100)}%` }} 
                      />
                    </div>

                    <Link 
                      to={`/activity/${activity.id}`}
                      className="inline-flex items-center gap-2 text-wellness-dark text-sm font-bold group/link"
                    >
                      รายละเอียดและลงทะเบียน
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="bg-wellness-bg py-16 border-y border-wellness-light/20 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-wellness-mid/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-wellness-dark/5 rounded-full blur-3xl -ml-32 -mb-32" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[32px] border border-wellness-border shadow-xl shadow-wellness-dark/5 overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-wellness-border">
              {[
                { label: 'ที่เปิดรับทั้งโครงการ', value: '800+', icon: Users, suffix: 'ท่าน' },
                { label: 'กิจกรรมไฮไลท์', value: '4', icon: Leaf, suffix: 'กิจกรรม' },
                { label: 'ไม่มีค่าใช้จ่าย', value: '100%', icon: CheckCircle2, suffix: 'ฟรีตลอดโครงการ' },
                { label: 'กรมพัฒนาธุรกิจการค้า', value: 'DBD', icon: Leaf, suffix: 'Development' },
              ].map((stat, i) => (
                <div 
                  key={i}
                  className="p-8 md:p-10 flex flex-col items-center text-center space-y-6 group hover:bg-wellness-bg/50 transition-colors duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-wellness-bg text-wellness-dark flex items-center justify-center group-hover:bg-wellness-dark group-hover:text-white transition-all duration-500">
                    <stat.icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl md:text-5xl font-bold text-wellness-dark tracking-tight">
                      {stat.value}
                    </p>
                    <div className="space-y-1">
                      <p className="text-wellness-ink font-bold text-sm tracking-wide">{stat.label}</p>
                      <p className="text-[10px] text-wellness-ink/40 uppercase font-bold tracking-widest">{stat.suffix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
