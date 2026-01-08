import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Github, Download } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { getVisitorCount } from './fetch'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Experience from '@/components/experience'

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
     <main className="bg-background text-foreground font-sans transition-colors duration-300">
      <Navbar />
        <div className="max-w-7xl mx-auto">
          <section id="hero" className="h-screen flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight"><Hero /></h2>
          </section>
                      
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.header
              className="mb-16 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Joseph Hernandez</h1>
              <div className="flex gap-4 flex-wrap">
                <Button asChild variant="outline">
                  <a href="mailto:joseph@josephinthe.cloud">
                    <Mail className="mr-2 h-5 w-5" /> joseph@josephinthe.cloud
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://www.linkedin.com/in/mjh18500/" target="_blank">
                    <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://github.com/mjh18500" target="_blank">
                    <Github className="mr-2 h-5 w-5" /> GitHub
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="/Joseph Hernandez_Resume.pdf" download>
                    <Download className="mr-2 h-5 w-5" /> Download Resume
                  </a>
                </Button>        
                <title>Joseph in the .Cloud</title>
              </div>
            </motion.header>
    
            {/* About Me */}
          <motion.section
            className="mb-16 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            <p className="text-foreground text-lg">
              I’m a Cloud & Infrastructure Engineer with 11+ years of experience in IT, specializing in Azure, automation, and infrastructure as code (IaC). With a strong background in Managed Service Providers, I’ve architected hybrid cloud environments, automated deployments with Terraform and GitHub Actions, and implemented security best practices across Microsoft 365 and Azure.
              <br></br>
              <br></br>
              I thrive at designing scalable, secure, and cost-efficient cloud solutions while streamlining operations through automation. Now, I’m focused on driving cloud transformation as a Cloud Engineer, helping organizations modernize their infrastructure and improve efficiency.
            </p>
          </motion.section>
    
            {/* Experience */}
          <Experience />        
            <motion.section
              id="skills"
              className="mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold mb-6">Technologies</h2>

              <div className="space-y-10">
                {/* 🌩️ Cloud & Infrastructure */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Cloud & Infrastructure</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" className="h-12 w-12" alt="Azure"/>
                      <span className="mt-2">Azure</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" className="h-12 w-12" alt="Google Cloud"/>
                      <span className="mt-2">Google Cloud</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" className="h-12 w-12" alt="Microsoft 365"/>
                      <span className="mt-2">Microsoft 365</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://img.icons8.com/?size=100&id=D5nuxA0qwo6w&format=png&color=000000" className="h-12 w-12" alt="Microsoft Intune"/>
                      <span className="mt-2">Microsoft Intune</span>
                    </div> 
                    <div className="flex flex-col items-center">
                      <img src="https://img.icons8.com/?size=100&id=13676&format=png&color=000000" className="h-12 w-12" alt="Microsoft Exchange"/>
                      <span className="mt-2">Microsoft Exchange</span>
                    </div>                                       
                    <div className="flex flex-col items-center">
                      <img src="https://img.icons8.com/?size=100&id=qomBLYrIgoU0&format=png&color=000000" className="h-12 w-12" alt="VMware"/>
                      <span className="mt-2">VMware</span>
                    </div>
                  </div>
                </div>

                {/* ⚙️ DevOps & Automation */}
                <div>
                  <h3 className="text-xl font-bold mb-4">DevOps & Automation</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="h-12 w-12" alt="Docker"/>
                      <span className="mt-2">Docker</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" className="h-12 w-12" alt="Terraform"/>
                      <span className="mt-2">Terraform</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://img.icons8.com/?size=100&id=12599&format=png&color=848484" className="h-12 w-12" alt="GitHub"/>
                      <span className="mt-2">GitHub</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="h-12 w-12" alt="Git"/>
                      <span className="mt-2">Git</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://img.icons8.com/?size=100&id=50ZQHdJTmPqw&format=png&color=000000" className="h-12 w-12" alt="Bash"/>
                      <span className="mt-2">Bash</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg" className="h-12 w-12" alt="PowerShell"/>
                      <span className="mt-2">PowerShell</span>
                    </div>
                  </div>
                </div>

                {/* 💻 Programming & Development */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Programming & Development</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="h-12 w-12" alt="Python"/>
                      <span className="mt-2">Python</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="h-12 w-12" alt="JavaScript"/>
                      <span className="mt-2">JavaScript</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="h-12 w-12" alt="TypeScript"/>
                      <span className="mt-2">TypeScript</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-12 w-12" alt="React"/>
                      <span className="mt-2">React</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="h-12 w-12" alt="Node.js"/>
                      <span className="mt-2">Node.js</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="h-12 w-12" alt="Java"/>
                      <span className="mt-2">Java</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" className="h-12 w-12" alt="Go"/>
                      <span className="mt-2">Go</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="h-12 w-12" alt="HTML"/>
                      <span className="mt-2">HTML</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="h-12 w-12" alt="CSS"/>
                      <span className="mt-2">CSS</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="h-12 w-12" alt="SQL"/>
                      <span className="mt-2">SQL</span>
                    </div>
                  </div>
                </div>

                {/* 🔒 Security & Networking */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Security & Networking</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
                    <div className="flex flex-col items-center">
                      <img src="https://img.icons8.com/?size=100&id=rxWO1RlZEppr&format=png&color=000000" className="h-12 w-12" alt="Bitdefender"/>
                      <span className="mt-2">Bitdefender</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://www.vectorlogo.zone/logos/cisco/cisco-ar21.svg" className="h-12 w-12" alt="Cisco"/>
                      <span className="mt-2">Cisco</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/SonicWall_logo.svg" className="h-12 w-12" alt="SonicWall"/>
                      <span className="mt-2">SonicWall</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://img.icons8.com/?size=100&id=sxWqNgkPhqSN&format=png&color=000000" className="h-12 w-12" alt="Ubiquiti"/>
                      <span className="mt-2">Ubiquiti</span>
                    </div>                    
                  </div>
                </div>

                {/* 🖥️ Systems & OS */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Systems & OS</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" className="h-12 w-12" alt="Linux"/>
                      <span className="mt-2">Linux</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://img.icons8.com/?size=100&id=30840&format=png&color=848484" className="h-12 w-12" alt="macOS"/>
                      <span className="mt-2">macOS</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" className="h-12 w-12" alt="Windows"/>
                      <span className="mt-2">Windows Server</span>
                    </div>
                  </div>
                </div>

                {/* 🛠️ Tools & Monitoring */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Tools & Monitoring</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.brandfetch.io/idGLFHvB44/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1721710637852" className="h-12 w-12" alt="Atera"/>
                      <span className="mt-2">Atera</span>
                    </div>                   
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" className="h-12 w-12" alt="Postman"/>
                      <span className="mt-2">Postman</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className="h-12 w-12" alt="VS Code"/>
                      <span className="mt-2">VS Code</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://cdn.brandfetch.io/idVHk_jeH3/w/400/h/400/idYvLQWpVC.jpeg?c=1bxid64Mup7aczewSAYMX&t=1726198622835" className="h-12 w-12" alt="Veeam"/>
                      <span className="mt-2">Veeam</span>
                    </div>                    
                  </div>
                </div>
              </div>
            </motion.section> 
                    
            <motion.section
              className="mb-16 max-w-5xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold mb-6">Skills</h2>

              {/* Cloud & Infrastructure */}
              <h3 className="text-xl font-medium mt-4 mb-2">Cloud & Infrastructure</h3>
              <p className="text-foreground">
                Azure AD/Entra, ARM, Bicep, Microsoft 365, Intune, Active Directory, Autopilot, SharePoint, Teams, Exchange,
                VMware, vSphere, Hyper-V, Citrix
              </p>

              {/* DevOps & Automation */}
              <h3 className="text-xl font-medium mt-4 mb-2">DevOps & Automation</h3>
              <p className="text-foreground">
                CI/CD, Test Automation, APIs, RESTful API, PowerShell, Bash, Shell, Batch,
                Automation (NinjaRMM, Atera, PDQ Deploy)
              </p>

              {/* Programming & Development */}
              <h3 className="text-xl font-medium mt-4 mb-2">Programming & Development</h3>
              <p className="text-foreground">
                Go, Java, SQL, HTML, CSS, JSON, XML, Lua, Groovy
              </p>

              {/* Security & Networking */}
              <h3 className="text-xl font-medium mt-4 mb-2">Security & Networking</h3>
              <p className="text-foreground">
                GPO, MFA, SPF/DKIM/DMARC, VPN, SSL, TCP/IP, Firewall (Fortinet, SonicWall,
                Ubiquiti, OpenDNS), Network Administration, LAN/WAN, VLAN, WLAN, DNS, DHCP, SNMP
              </p>

              {/* Systems & OS */}
              <h3 className="text-xl font-medium mt-4 mb-2">Systems & OS</h3>
              <p className="text-foreground">
                Windows Server (2008–2022), Windows XP–11, macOS, iOS,
                System Administration, Systems Integration, Virtualization
              </p>

              {/* Tools & Monitoring */}
              <h3 className="text-xl font-medium mt-4 mb-2">Tools & Monitoring</h3>
              <p className="text-foreground">
                Veeam, Synology NAS, Dell iDRAC, OpenManage, TeamViewer, Postman,
                FreshDesk, Microsoft Office (Excel, Outlook, Word, PowerPoint)
              </p>
            </motion.section>
            {/* Certifications */}
          <section id="certs">
            <motion.section 
              className="max-w-5xl mx-auto mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6">Certifications</h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <a
                  href="https://learn.microsoft.com/api/credentials/share/en-us/Joseph-9560/D8EF1A1C72777DB4?sharingId=D2A3415349F77F0D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-2xl shadow-md hover:shadow-lg transition bg-card text-card-foreground"
                >
                  <img
                    src="/certifications/azure-admin.svg"
                    alt="Microsoft Azure Administrator Associate"
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      Microsoft Certified: Azure Administrator Associate
                    </h3>
                    <p className="text-sm text-muted-foreground">Microsoft</p>
                  </div>
                </a>
              </div>
            </motion.section>

          {/* Education */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold mb-4">Education</h2>
              <ul className="text-foreground space-y-2 mb-16">
                <li>
                  <strong>Bachelor of Applied Arts & Sciences</strong>, Texas State University, 2018 (GPA: 4.0)
                </li>
                <li>
                  <strong>Associate of Applied Science in Computer Systems Management</strong>, Texas State Technical College, 2013 (GPA: 4.0)
                </li>
              </ul>
            </motion.section>
          </section>

            {/* Visitor Count */}
            <motion.section
              className="mb-16 max-w-5xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card text-card-foreground shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    {/* Left: Count */}
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Visitor Count</h3>
                      <h3 className="text-xl font-bold text-foreground">
                        {error ? error : visitorCount !== null ? visitorCount : "Loading..."}
                      </h3>
                    </div>

                    {/* Right: Cosmos DB attribution */}
                    <div className="flex flex-col items-center">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Azure_Cosmos_DB.svg"
                        alt="Azure Cosmos DB"
                        className="h-24 w-24"
                      />
                      <span className="mt-2 text-sm text-muted-foreground text-center">
                        Database<br />Azure Cosmos DB
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>      
          </section>
        </div>  
      </main>
  )
}

export default App
