import React from 'react';
import { Key, ShieldAlert, ShieldCheck, Lock } from 'lucide-react';
import { services } from '../data/cvData';

export default function ServicesSection() {
  const iconMap = {
    Key: Key,
    ShieldAlert: ShieldAlert,
    ShieldCheck: ShieldCheck,
    Lock: Lock
  };

  return (
    <section className="w-full bg-white border-b border-slate-200/80" id="services">
      <main className="flex flex-col gap-10 py-24 px-4 md:px-8 md:max-w-[1200px] md:mx-auto">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-sm uppercase text-[#1770b5] font-bold mx-auto pb-1 w-max">
            Services
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1f2937]">
            Core Cyber Security Specialties
          </h3>
        </div>

        {/* Services 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv) => {
            const IconComp = iconMap[srv.icon] || ShieldCheck;
            return (
              <div
                key={srv.id}
                className="flex flex-col gap-4 rounded-xl p-6 md:p-8 border border-[#1770b5]/20 bg-white hover:border-[#1770b5] shadow-sm hover:shadow-md transition-all text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1770b5]/10 text-[#1770b5] flex items-center justify-center group-hover:bg-[#1770b5] group-hover:text-white transition-all">
                  <IconComp className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-bold text-[#1f2937] group-hover:text-[#1770b5] transition-colors">
                  {srv.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {srv.description}
                </p>
              </div>
            );
          })}
        </div>

      </main>
    </section>
  );
}
