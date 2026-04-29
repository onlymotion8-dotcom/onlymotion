
import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '實拍',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('感謝您的來信！我們將儘速與您聯繫。');
    setFormData({ name: '', email: '', service: '實拍', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">啟動您的影像計畫</h2>
          <p className="text-gray-400">告訴我們您的想法，讓我們一同創造不凡。</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">聯繫資訊</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/10 rounded-lg text-blue-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">工作室地址</p>
                    <p className="text-sm text-gray-400">台北市大安區光復南路 123 號 4 樓</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/10 rounded-lg text-blue-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">電子郵件</p>
                    <p className="text-sm text-gray-400">contact@onlymotion.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/10 rounded-lg text-blue-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">聯絡電話</p>
                    <p className="text-sm text-gray-400">02-2771-XXXX</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="p-8 bg-zinc-900 border border-white/5 rounded-2xl shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">您的姓名</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="王大明"
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">電子信箱</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="example@mail.com"
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-white"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium text-gray-300">需求類型</label>
                <select 
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-white"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="實拍">實拍影像製作</option>
                  <option value="動畫">動態動畫設計</option>
                  <option value="後製">剪輯與後期特效</option>
                  <option value="其他">其他合作洽談</option>
                </select>
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-sm font-medium text-gray-300">訊息內容</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="請描述您的專案需求..."
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-white resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]"
              >
                <Send size={18} />
                送出諮詢
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
