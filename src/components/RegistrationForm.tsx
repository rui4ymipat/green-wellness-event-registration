/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Send, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { EventActivity } from '../types';

interface RegistrationFormProps {
  event: EventActivity;
}

export function RegistrationForm({ event }: RegistrationFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'กรุณากรอกชื่อ';
    if (!formData.lastName.trim()) newErrors.lastName = 'กรุณากรอกนามสกุล';
    if (!formData.phone.trim()) {
      newErrors.phone = 'กรุณากรอกเบอร์โทรศัพท์';
    } else if (!/^\d{9,10}$/.test(formData.phone.replace(/[-\s]/g, ''))) {
      newErrors.phone = 'กรุณากรอกเบอร์โทรศัพท์ที่ถูกต้อง (9-10 หลัก)';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'กรุณากรอกอีเมล';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'กรุณากรอกอีเมลที่ถูกต้อง';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-8 text-center shadow-xl border border-wellness-light/20"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">ลงทะเบียนสำเร็จ!</h3>
        <p className="text-gray-600 mb-6">
          ขอบคุณที่สนใจเข้าร่วมกิจกรรม <strong>{event.title}</strong><br />
          เราได้ส่งรายละเอียดการยืนยันไปที่อีเมลของคุณแล้ว
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-wellness-dark font-medium hover:underline"
        >
          ลงทะเบียนเพิ่มสำหรับท่านอื่น
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-[20px] shadow-lg shadow-wellness-dark/5 border border-wellness-border overflow-hidden">
      <div className="p-8 border-b border-wellness-border">
        <h3 className="text-xl font-bold text-wellness-dark">ลงทะเบียนเข้าร่วม</h3>
        <p className="text-wellness-ink/60 text-sm mt-1">{event.title} ({event.date})</p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-5">
        <div className="space-y-2">
          <label className="text-[13px] font-bold text-wellness-ink/80">ชื่อ-นามสกุล</label>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={cn(
                  "w-full px-4 py-3 rounded-[10px] border transition-all focus:border-wellness-dark focus:bg-[#FBFCFA] outline-none text-sm",
                  errors.firstName ? "border-red-300 bg-red-50" : "border-wellness-input"
                )}
                placeholder="ชื่อ"
              />
              {errors.firstName && <p className="text-[10px] text-red-500">{errors.firstName}</p>}
            </div>
            <div className="space-y-1">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={cn(
                  "w-full px-4 py-3 rounded-[10px] border transition-all focus:border-wellness-dark focus:bg-[#FBFCFA] outline-none text-sm",
                  errors.lastName ? "border-red-300 bg-red-50" : "border-wellness-input"
                )}
                placeholder="นามสกุล"
              />
              {errors.lastName && <p className="text-[10px] text-red-500">{errors.lastName}</p>}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[13px] font-bold text-wellness-ink/80">เบอร์โทรศัพท์ติดต่อ</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 rounded-[10px] border transition-all focus:border-wellness-dark focus:bg-[#FBFCFA] outline-none text-sm",
              errors.phone ? "border-red-300 bg-red-50" : "border-wellness-input"
            )}
            placeholder="08x-xxx-xxxx"
          />
          {errors.phone && <p className="text-[10px] text-red-500">{errors.phone}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-[13px] font-bold text-wellness-ink/80">อีเมล</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 rounded-[10px] border transition-all focus:border-wellness-dark focus:bg-[#FBFCFA] outline-none text-sm",
              errors.email ? "border-red-300 bg-red-50" : "border-wellness-input"
            )}
            placeholder="example@mail.com"
          />
          {errors.email && <p className="text-[10px] text-red-500">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-[13px] font-bold text-wellness-ink/80">หมายเหตุเพิ่มเติม (ถ้ามี)</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-[10px] border border-wellness-input transition-all focus:border-wellness-dark focus:bg-[#FBFCFA] outline-none text-sm resize-none"
            placeholder="ระบุความประสงค์เพิ่มเติม..."
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-wellness-dark hover:bg-wellness-dark/95 text-white font-bold py-4 rounded-[12px] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-base mt-2"
        >
          {isLoading ? (
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
          ) : "ยืนยันการลงทะเบียน"}
        </button>
        <div className="text-center text-[12px] opacity-60">ไม่มีค่าใช้จ่ายในการเข้าร่วมกิจกรรม</div>
      </form>
    </div>
  );
}
