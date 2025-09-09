"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Experience() {
  const [expanded, setExpanded] = useState(false);

  return ( 
        <motion.section
          id="experience"
          className="max-w-7xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">Experience</h2>

          <Card className="bg-card text-card-foreground shadow-md">
            <CardContent className="text-foreground p-6">
              <h3 className="text-xl font-bold">Tech-Net Consultants (2014–2025)</h3>

              {/* Always visible highlights */}
              <ul className="list-disc ml-5 mt-2 space-y-2">
                <li>Architected and automated IT workflows using PowerShell and scripting.</li>
                <li>Standardized Windows 10/11 with GPOs, Intune, and automation.</li>
                <li>Designed and managed Azure: VMs, VNETs, Azure AD, cost optimization.</li>
                <li>Configured Microsoft 365 security: MFA, DKIM, SPF, Intune MDM.</li>
                <li>Implemented monitoring and RMM tools: NinjaRMM, Atera.</li>
                <li>Supported 40+ client infrastructures with 400+ users and 1,500+ endpoints.</li>
                <li>Final escalation point for complex issues.</li>
              </ul>

              {/* Expandable section */}
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <h4 className="font-semibold mt-4">IT Manager / Senior SysAdmin (2018–2025)</h4>
                    <ul className="list-disc ml-5 mt-2 space-y-2">
                      <li>Managed AD, GPOs, and security policies for 40+ organizations.</li>
                      <li>Configured hybrid Azure with VMs, VNets, and gateways.</li>
                      <li>Oversaw firewalls, routers, switches, and wireless networks.</li>
                      <li>Migrated and managed RMM and Help Desk platforms.</li>
                      <li>Mentored junior engineers and streamlined processes.</li>
                    </ul>

                    <h4 className="font-semibold mt-4">IT Specialist (2014–2018)</h4>
                    <ul className="list-disc ml-5 mt-2 space-y-2">
                      <li>Provided support for 400+ users across 1,500 endpoints.</li>
                      <li>Deployed hardware/software (Windows, macOS, Windows Server).</li>
                      <li>Reduced downtime with Dell iDrac and automated server alerts.</li>
                      <li>Implemented firewalls, antivirus, and spam filtering.</li>
                      <li>Deployed VOIP systems and coordinated telecom migrations.</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Toggle button */}
              <button
                onClick={() => setExpanded(!expanded)}
                className="icon-button"
              >
                {expanded ? "Show less" : "Show more"}
              </button>
            </CardContent>
          </Card>
        </motion.section>   
  );
}
