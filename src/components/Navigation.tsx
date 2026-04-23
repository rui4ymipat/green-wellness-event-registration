/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, Phone, Mail, MessageCircle, MapPin, Globe, Clock, Facebook, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_LINKS, PROJECT_NAME } from '../constants';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-wellness-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="https://uploadcenter.jetcoding.co/api/serve?key=bd7e0a63-0549-4260-b4fd-07fc96bcfced.png"
                alt="DBD - Department of Business Development"
                className="h-10 w-auto object-contain"
              />
              <div className="leading-tight">
                <div className="font-bold text-sm tracking-wide text-wellness-ink">DBD GREEN WELLNESS</div>
                <div className="text-[10px] opacity-60 uppercase text-wellness-ink">กรมพัฒนาธุรกิจการค้า</div>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-wellness-dark",
                  location.pathname === link.path 
                    ? "text-wellness-dark" 
                    : "text-wellness-ink/70"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-wellness-dark p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-wellness-light/30 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    location.pathname === link.path
                      ? "bg-wellness-bg text-wellness-dark"
                      : "text-gray-600 hover:bg-wellness-bg hover:text-wellness-dark"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-wellness-dark text-white py-20 mt-20 border-t border-wellness-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Section 1: Brand & Address */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Leaf className="w-8 h-8 text-wellness-light" />
                <h3 className="font-bold text-xl leading-tight">โครงการยกระดับภาพลักษณ์สินค้า Green Wellness</h3>
              </div>
              <p className="text-wellness-light/60 text-sm font-medium">กรมพัฒนาธุรกิจการค้า กระทรวงพาณิชย์</p>
            </div>
            
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-wellness-light shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-wellness-light uppercase tracking-wider mb-1">ที่อยู่</h4>
                <p className="text-sm text-wellness-light/70 leading-relaxed">
                  563 ถนนนนทบุรี ตำบลบางกระสอ อำเภอเมืองนนทบุรี จังหวัดนนทบุรี 11000
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Contact & Hours */}
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-wellness-light shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-wellness-light uppercase tracking-wider mb-1 text-[10px]">โทรศัพท์</h4>
                    <p className="text-sm">02-547-5959</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-wellness-light shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-wellness-light uppercase tracking-wider mb-1 text-[10px]">อีเมล</h4>
                    <a href="mailto:greenwellness@dbd.go.th" className="text-sm hover:text-wellness-light transition-colors">greenwellness@dbd.go.th</a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <Globe className="w-5 h-5 text-wellness-light shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-wellness-light uppercase tracking-wider mb-1 text-[10px]">เว็บไซต์</h4>
                    <a href="http://www.dbd.go.th" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-wellness-light transition-colors">www.dbd.go.th</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-wellness-light shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-wellness-light uppercase tracking-wider mb-1 text-[10px]">เวลาทำการ</h4>
                    <p className="text-sm">จันทร์ – ศุกร์ 08:30 – 16:30 น.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Social & News */}
          <div className="space-y-6 lg:pl-12">
            <h4 className="text-sm font-bold text-wellness-light flex items-center gap-2">
              <Bell className="w-4 h-4" />
              ติดตามข่าวสารเพิ่มเติม
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Facebook className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">Facebook: DBD Official</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">LINE: @dbdthailand</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-wellness-light/40">
          <p className="text-xs">
            © 2026 กรมพัฒนาธุรกิจการค้า สงวนลิขสิทธิ์
          </p>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-wellness-light/30">
            <span>Wellness</span>
            <span>Sustainability</span>
            <span>Innovation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
