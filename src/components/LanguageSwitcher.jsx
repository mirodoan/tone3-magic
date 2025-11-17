import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

//   return (
//     <div style={{ display: 'flex', gap: 8 }}>
//       <button
//         onClick={() => changeLanguage('vi')}
//         style={{
//           fontWeight: i18n.language === 'vi' ? 'bold' : 'normal',
//           background: i18n.language === 'vi' ? '#f87171' : '#fff',
//           color: i18n.language === 'vi' ? '#fff' : '#f87171',
//           border: '1px solid #f87171',
//           borderRadius: 4,
//           padding: '4px 12px',
//           cursor: 'pointer'
//         }}
//       >
//         Tiếng Việt
//       </button>
//       <button
//         onClick={() => changeLanguage('en')}
//         style={{
//           fontWeight: i18n.language === 'en' ? 'bold' : 'normal',
//           background: i18n.language === 'en' ? '#f87171' : '#fff',
//           color: i18n.language === 'en' ? '#fff' : '#f87171',
//           border: '1px solid #f87171',
//           borderRadius: 4,
//           padding: '4px 12px',
//           cursor: 'pointer'
//         }}
//       >
//         English
//       </button>
//     </div>
//   );
// };

// export default LanguageSwitcher;

return (
    <div className="flex gap-2 text-sm font-medium">
      <button
        onClick={() => i18n.changeLanguage('vi')}
        className={`hover:underline ${i18n.language === 'vi' ? 'text-[#D7263D]' : 'text-gray-500'}`}
        style={{ background: 'none', border: 'none', padding: 0 }}
      >
        Tiếng Việt
      </button>
      <span className="text-gray-400">|</span>
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`hover:underline ${i18n.language === 'en' ? 'text-[#D7263D]' : 'text-gray-500'}`}
        style={{ background: 'none', border: 'none', padding: 0 }}
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;
