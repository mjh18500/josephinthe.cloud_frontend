import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { getVisitorCount } from './fetch'


function App() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getVisitorCount()
      .then(setVisitorCount)
      .catch(err => {
        console.error(err);
        setError("Unable to fetch visitor count");
      });
  }, []);
  
   return (
    <main className="p-6 md:p-12 lg:p-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
          <section className="max-w-5xl mx-auto">
            <motion.header
              className="mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Joseph Hernandez</h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
                Cloud & DevOps Engineer | Automation Enthusiast | IT Infrastructure Specialist
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button asChild variant="outline">
                  <a href="mailto:mjh18500@gmail.com">
                    <Mail className="mr-2 h-5 w-5" /> mjh18500@gmail.com
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://www.linkedin.com/in/mjh18500/" target="_blank">
                    <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                  </a>
                </Button>
                <title>Joseph Hernandez in the Cloud</title>
              </div>
            </motion.header>
    
            <motion.section
              className="mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold mb-4">About Me</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                I’m an IT professional with 11 years in a Managed Service Provider (MSP) environment, specializing in automation, scripting, and IT infrastructure management. I love solving real-world problems through scripting and creating scalable, secure, and efficient systems for users and IT teams.
              </p>
            </motion.section>
    
            <motion.section
              className="mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold mb-4">Experience</h2>
              <Card className="mb-4">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Systems Engineer, Tech-Net Consultants (2014–2025)</h3>
                  <ul className="list-disc ml-5 mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Architected and automated IT workflows using PowerShell.</li>
                    <li>Standardized Windows 10/11 environments with GPOs, Intune, and scripting.</li>
                    <li>Implemented monitoring via NinjaRMM and Atera.</li>
                    <li>Managed Azure: VMs, VNETs, Azure AD, cost optimization.</li>
                    <li>Configured Office 365 security: MFA, DKIM, SPF, Intune MDM.</li>
                    <li>Supported 40+ client infrastructures with 400+ users and 1,500+ endpoints.</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.section>
    
            <motion.section
              className="mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold mb-4">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
                <div>
                  <strong>Scripting:</strong> PowerShell, Batch
                </div>
                <div>
                  <strong>Cloud:</strong> Azure, Microsoft 365, Autopilot
                </div>
                <div>
                  <strong>Security:</strong> GPO, MFA, DKIM, SPF, DMARC
                </div>
                <div>
                  <strong>OS:</strong> Windows Server, macOS, Linux
                </div>
                <div>
                  <strong>Tools:</strong> NinjaRMM, Atera, PDQ Deploy
                </div>
                <div>
                  <strong>Other:</strong> SNMP, iDrac, SQL Server, Veeam
                </div>
              </div>
            </motion.section>
    
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold mb-4">Education</h2>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  <strong>Bachelor of Applied Arts & Sciences</strong>, Texas State University, 2018 (GPA: 4.0)
                </li>
                <li>
                  <strong>Associate of Applied Science in Computer Systems Management</strong>, Texas State Technical College, 2013 (GPA: 4.0)
                </li>
              </ul>
            </motion.section>
            <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Visitor Count</h3>
                  <h3 className="text-xl font-bold">{error ? error : visitorCount !== null ? visitorCount : 'Loading...'}</h3>
                </CardContent>
          </section>
        </main>
  )
}

export default App
