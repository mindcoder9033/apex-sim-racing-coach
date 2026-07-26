/**
 * Data Backup Export & Import Manager
 * Handles JSON backup download, file import validation, and local storage warning alerts.
 */

class ApexExport {
  downloadBackup() {
    const jsonStr = window.apexStore.exportData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const timestamp = new Date().toISOString().split('T')[0];
    const a = document.createElement('a');
    a.href = url;
    a.download = `apex_backup_${timestamp}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  showImportDialog() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        const result = window.apexStore.importData(event.target.result);
        if (result.success) {
          alert('✅ Progress successfully restored from backup!');
          window.apexApp.navigateTo('dashboard');
        } else {
          alert(`❌ Import Failed: ${result.message}`);
        }
      };
      reader.readAsText(file);
    };
    fileInput.click();
  }
}

window.apexExport = new ApexExport();
